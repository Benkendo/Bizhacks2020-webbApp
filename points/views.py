from django.shortcuts import render
import pandas as pd
import os
import json


def data_calc(customer_list, score_list, weight_list):
    if customer_list is None:
        return []
    elif score_list is None:
        return []
    elif weight_list is None:
        return []
    for i in range(1, len(score_list)):
        for j in range(1, len(score_list[i])):
            customer_list[i][1] = \
                float(customer_list[i][1]) + float(score_list[i][j])*float(weight_list[1][j-1])
    return customer_list


class ReadHelper:
    def __init__(self, address):
        try:
            self.df = pd.read_csv(address, sep=',', header=None)
        except:
            self.df = None

    def getColumn(self):
        if len(self.df) != 0:
            return self.df.to_dict()
        else:
            return None

    def getRow(self):
        if len(self.df) != 0:
            self.stf = self.df.T
            return self.stf.to_dict()
        else:
            return None


def calc():
    # init = 800
    script_path = os.path.abspath(__file__)
    script_dir = os.path.split(script_path)[0]  # find the folder
    script_dir = os.path.join(script_dir, "csvfile")
    test_csv = "customer.csv"
    fin_path = os.path.join(script_dir, test_csv)
    customer_list = ReadHelper(fin_path).getRow()

    score_csv = "flag.csv"
    score_path = os.path.join(script_dir, score_csv)
    score_list = ReadHelper(score_path).getRow()

    weight_csv = "weight.csv"
    weight_path = os.path.join(script_dir, weight_csv)
    weight_list = ReadHelper(weight_path).getRow()

    res_list = data_calc(customer_list, score_list, weight_list)
    return res_list
id = 2

res_list = calc()
res_arr = []
for i in range(1, len(res_list)):
    res_arr.append(res_list[i])
res_str = ''
for i in range(0, len(res_arr)):
    if res_arr[i][0] == str(id):
        res_str = res_arr[i][1]

json_arr = json.dumps(res_arr)


def dataPost(request):
    res_relist = res_list.values()
    return render(request, 'index.html', {"data": json_arr})


def reg(value, request):
    if request.method == 'POST':
        name=request.POST.get('username')
        pwd=request.POST.get('password')
        if name == 'abc' and pwd == 'cde':
            id = 1
        elif name == 'ccc' and pwd == 'edf':
            id = 2
    return render(request, 'login.html', res_list[id])



