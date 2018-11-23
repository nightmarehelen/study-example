# encoding=utf-8
import numpy as np
import json

def calc_shannon_entropy(vector):
    """
    计算shannon 信息熵
    :param vector:一组随机变量
    :return:
    """
    counter = {}
    # print("***************\n")
    # print(vector)
    # print('\n\n')
    for i in range(len(vector)):
        counter[vector[i]] = counter.get(vector[i], 0) + 1
    # print(counter)
    ret = 0
    for key in counter:
        p = float(counter[key]) / len(vector)
        ret += - p * np.log2(p)
    return ret


def create_data_set():
    """
    创建数据集
    :return:
    """
    data_set_ = [
        [1, 1, 'yes'],
        [1, 1, 'yes'],
        [1, 0, 'no'],
        [0, 1, 'no'],
        [0, 1, 'no']
    ]
    labels_ = ['no surfacing', 'flippers']
    return np.array(data_set_), np.array(labels_)


def split_data_set(ds, axis, value):
    ret = []
    for i in range(len(ds)):
        if ds[i][axis] == value:
            excluded = []
            excluded.extend(ds[i][:axis])
            excluded.extend(ds[i][axis+1:])
            ret.append(excluded)
    return ret


def choose_best_feature_to_split(data_set):
    """
    选择信息增益最大的特征
    信息增益的计算方法：计算全体的香农熵 - 子集分布律 * 子集香农熵
    :param data_set:
    :return:
    """
    # 特征数量
    num_of_feature = len(data_set[0]) - 1
    print(data_set)
    entropy = calc_shannon_entropy(np.array(data_set)[:, -1])
    # 注意此种获取最小浮点数的方式
    max_info_gain = np.finfo(np.float).min
    best_feature = -1
    # 依次计算每个特征的信息增益
    for i in range(num_of_feature):
        info_gain = 0
        # m表示指定feature的取值集合
        unique_values = [column[i] for column in data_set]
        unique_values = set(unique_values)
        for value in unique_values:
            # 按照第i个特性的value值对原始数据进行划分
            split = split_data_set(data_set, i, value)
            # 计算划分后的香农熵
            temp_entropy = calc_shannon_entropy(np.array(split)[:, -1])
            info_gain += temp_entropy * len(split)/len(data_set)
        # 此处为信息增益的计算公式
        info_gain = entropy - info_gain
        if info_gain > max_info_gain:
            best_feature = i
            max_info_gain = info_gain
    return best_feature


def majority_cnt(class_list):
    """
    所有属性都已经选择完毕，但是最后一个属性还存在多种分类，使用选举算法找到出现次数最多的那一个作为最终的分类结果
    :param classList:
    :return:
    """
    counter = {}
    for item in class_list:
        counter[item] = counter.get(item, 0) + 1

    sorted_counter = sorted(counter, key=lambda item:counter[item], reverse=True)
    return sorted_counter[0]


def create_decision_tree(data_set, labels):
    """
    构建决策树
    :param data_set:
    :return:
    """
    class_list = np.array(data_set)[:, -1]
    # 如果所有类型一致，则认为处理完毕，返回类型
    if len(set(class_list)) == 1:
        return class_list[0]

    # 如果只剩下一列，则使用选举法找到分类
    if len(data_set[0]) == 1:
        return majority_cnt(class_list)

    # 定义tree对象
    my_tree = {}

    # 选取当前最好的分类特性
    print(data_set)
    feature = choose_best_feature_to_split(data_set)
    feature_label = labels[feature]

    # 从特性列表当中删除当前特性，最后只保持一个特性
    labels = np.delete(labels, feature, axis=0)

    # 找到当前特性对应的所有值
    feature_values = [column[feature] for column in data_set]
    feature_values = set(feature_values)

    my_tree[feature_label] = {}
    # 依次处理各个特性值
    for value in feature_values:
        new_labels = labels[:]
        new_data_set = split_data_set(data_set, feature, value)
        my_tree[feature_label][value] = create_decision_tree(new_data_set, new_labels)
    return my_tree


def classify(dtree, labels, test_vec):
    # 找到根节点名称
    feature_name = list(dtree.keys())[0]
    # 找到该属性在labels的索引，然后从test_vec对应的位置查到值看是否相等
    feature_index = list(labels).index(feature_name)
    feature_dict = dtree[feature_name]

    class_label = "not_found"
    for feature_value in feature_dict:
        print("feature_value={0},test_vec[feature_index]={1}".format(feature_value, test_vec[feature_index]))
        if feature_value == test_vec[feature_index]:
            # 这里判断特性值对应的值如果为map，表示还需要向下递归查找
            if type(feature_dict[feature_value]).__name__ == 'dict':
                class_label = classify(feature_dict[feature_value], labels, test_vec)
            else:
                class_label = feature_dict[feature_value]

    return class_label


def store_tree(tree, filename):
    import pickle
    f = open(filename, "wb+")
    pickle.dump(tree, f)
    f.close()


def grab_tree(filename):
    import pickle
    f = open(filename, "rb")
    ret = pickle.load(f)
    f.close()
    return ret


def classify_lens():
    f = open("lenses.txt")
    lenses = [line.strip().split("\t") for line in f.readlines()]
    lenses_labels = ['age', 'prescript', 'astigmatic', 'tearRate']
    tree = create_decision_tree(lenses, lenses_labels)
    print(json.dumps(tree, indent=4))


data_set, labels = create_data_set()
# print(data_set)
# print(calc_shannon_entropy(np.array(data_set)[:, -1]))
#
# data_set[0][-1] = 'maybe'
# print(data_set)
# print(calc_shannon_entropy(np.array(data_set)[:, -1]))
# print(split_data_set(data_set, 0, '1'))
#
# print(choose_best_feature_to_split(data_set))
# print(majority_cnt(data_set[:, -1]))


# tree = create_decision_tree(data_set, labels)
# print(json.dumps(tree, indent=4))
# print(classify(tree, labels, ['1', '0']))
# print(classify(tree, labels, ['1', '1']))
#
# store_tree(tree, "tree")
#
# print(grab_tree("tree"))

classify_lens()
