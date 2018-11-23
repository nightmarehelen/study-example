# encoding=utf-8
import numpy as np


def load_data_set():
    post = [['my', 'dog', 'has', 'flea', 'problems', 'help', 'please'],
            ['maybe', 'not', 'take', 'him', 'to', 'dog', 'park', 'stupid'],
            ['my', 'dalmation', 'is', 'so', 'cute', 'I', 'love', 'him'],
            ['stop', 'posting', 'stupid', 'worthless', 'garbage'],
            ['mr', 'licks', 'ate', 'my', 'steak', 'how', 'to', 'stop', 'him'],
            ['quit', 'buying', 'worthless', 'dog', 'food', 'stupid']]
    class_vec = [0, 1, 0, 1, 0, 1]  # 1 is abusive, 0 not
    return post, class_vec


def create_vocab_list(data_set):
    # 求出给定数据集当中的词汇集合
    ret = set([])
    for doc in data_set:
        ret = ret | set(doc)
    return list(ret)


def words_set2vec(vocab_list, input_set):
    """
    输入词汇表和已知词汇表进行对照，生成标识向量
    :param vocab_list:
    :param input_set:
    :return:
    """
    ret = np.tile([0], len(vocab_list))

    for word in input_set:
        if word in vocab_list:
            index = vocab_list.index(word)
            ret[index] = 1
        else:
            print('Your word "{0}"is not in my vocabulary!'.format(word))
    return ret


list_posts, list_classes = load_data_set()
myVocabList = create_vocab_list(list_posts)
print(myVocabList)
trainMat = []
for post_doc in list_posts:
    trainMat.append(words_set2vec(myVocabList, post_doc))
print(trainMat)
