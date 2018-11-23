# encoding=utf-8

import numpy as np
import os
from matplotlib import pyplot as plt


def create_data_set():
    """
    创建数据集
    :return:
    """
    g = np.array([[1.0, 1.1], [1.0, 1.0], [0, 0], [0, 0.1]])
    lb = ['A', 'A', 'B', 'B']
    return g, lb


def classify0(input_data, data_set, labels, k):
    """
    knn算法实现
    :param input_data: 输入参数，待分类数据
    :param data_set: 数据集
    :param labels: 已知分类结果
    :param k: k值，
    :return:
    """
    # 计算总共多少行
    data_set_size = data_set.shape[0]

    # 将输入的数组在行方向扩展为何data_set相同维度的矩阵，并进行代数差值计算
    # 注意矩阵减法运算
    # tile函数用于将给定矩阵A重复rep次，A和rep维度的最大值决定最终结果的维度，
    # 如果rep的维度小于A的维度，rep需要插入1至前方构造一个和A维度相同的数组
    # 然后从右到左按照rep的至对A在各个维度进行重复
    diff_mat = np.tile(input_data, (data_set_size, 1)) - data_set

    # 对于2维矩阵，沿着列方向求和，生成一个列向量
    diff_vec = (diff_mat * diff_mat).sum(axis=1)

    # 待选举的值，差值较小的前K个值
    to_voted = diff_vec.argsort()
    # print("to_voted =" % to_voted)
    # print(to_voted[:k])
    counter = {}
    # 计算各个标签出现的次数
    for i in range(k):
        label = labels[to_voted[i]]
        counter[label] = counter.get(label, 0) + 1

    sorted_counter = sorted(counter, key=lambda item: counter[item], reverse=True)
    # print(sorted_counter)
    return sorted_counter[0]


label_map = {
    "largeDoses": 1,
    "smallDoses": 2,
    "didntLike": 3
}


def file2matrix(filename):
    """
    读取文件数据，转化为矩阵
    :param filename: 文件名
    :return:
    """
    f = open(filename)
    m = []
    lb = []
    # 按行读取
    for line in f.readlines():
        # 去除行首行位的空白字符
        line = line.strip()
        # \t分隔拆分
        items = line.split('\t')
        m.append(int_list(items[:3]))
        lb.append(label_map[items[3]])
    return np.array(m), lb


def int_list(strings):
    ret = []
    for i in strings:
        ret.append(float(i))
    return ret


def auto_norm(data_set):
    """
    归一区间落在-0.5 - 1
    :param data_set:
    :return:
    """
    min_vec = np.min(data_set, 0)
    max_vec = np.max(data_set, 0)
    avg_vec = np.mean(data_set, 0)
    range_mat = np.tile(max_vec - min_vec, (data_set.shape[0], 1))
    ret = (data_set - np.tile(avg_vec, (data_set.shape[0], 1))) / range_mat
    return ret


def auto_norm2(data_set):
    """
    归一区间落在0 - 1
    :param data_set:
    :return:
    """
    min_vec = np.min(data_set, 0)
    max_vec = np.max(data_set, 0)

    minus_min = data_set - np.tile(min_vec, (data_set.shape[0], 1))
    range_mat = np.tile(max_vec - min_vec, (data_set.shape[0], 1))
    ret = minus_min / range_mat
    return ret


def dating_test():
    data_set, labels = file2matrix("datingTestSet.txt")
    data_set = auto_norm(data_set)
    print(data_set)
    print(labels)

    # 前10%作为测试样本
    test_sample_rate = 0.1
    columns = data_set.shape[0]
    test_columns = int(columns*test_sample_rate)

    right_cnt = 0
    for i in range(test_columns):
        label = classify0(data_set[i], data_set[test_columns:], labels[test_columns:], 3)
        if label == labels[i]:
            right_cnt = right_cnt + 1
        else:
            print("label of {0} should be {1}, but predict as {2}\n".format(data_set[i], labels[i], label))

    print("accuracy rate of this KNN is ", right_cnt / test_columns)


def img2vector(filename):
    # 已知每个字符长度为1024
    ret = []
    f = open(filename)
    for line in f.readlines():
        line = line.strip()
        for i in range(len(line)):
            ret.append(int(line[i]))

    number = filename.split("_")[0][filename.split("_")[0].rfind("/")+1:]
    return np.array(ret), number


def num_test():
    test_matrix = []
    test_labels = []
    for file_name in os.listdir("testDigits"):
        data, number = img2vector("testDigits/{0}".format(file_name))
        test_matrix.append(data)
        test_labels.append(number)
    test_matrix = np.array(test_matrix)
    training_matrix = []
    training_labels = []
    for file_name in os.listdir("trainingDigits"):
        data, number = img2vector("trainingDigits/{0}".format(file_name))
        training_matrix.append(data)
        training_labels.append(number)
    training_matrix = np.array(training_matrix)
    right_cnt = 0
    for i in range(len(test_matrix)):
        label = classify0(test_matrix[i], training_matrix, training_labels, 3)
        if label == test_labels[i]:
            right_cnt += 1
        else:
            print("{0} should be {1}, but predict as {2}\n".format(test_matrix[i], test_labels[i], label))
    print("accuracy rate is {0}".format(right_cnt*100/len(test_labels)))

# group, labels = create_data_set()
# print(group.shape)
#
# print(classify0([1, 2], group, labels, 3))
#
#
# datingDataMat, datingLabels = file2matrix('datingTestSet.txt')
# print(datingDataMat)
# # Creates a new figure
# fig = plt.figure()
#
# # If the three integers are I, J, and K, the subplot is the Ith plot on a grid with J rows and K columns.
# ax = fig.add_subplot(1, 1, 1)
#
# # 参数三对应一个数组，指出每个值得大小
# # 参数四每个参数的颜色，此处根据label_map对应的值*15获得
# # marker 标识
# ax.scatter(datingDataMat[:, 1], datingDataMat[:, 2], 15.0*array(datingLabels), 15.0*array(datingLabels), marker="*")
# plt.show()

# a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
# print(auto_norm(a))
# print(auto_norm2(a))
#dating_test()

# vec, num = img2vector("trainingDigits/0_0.txt")
# print(vec, len(vec), num)

num_test()