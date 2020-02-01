from read_helper import *
import os
import calc_score


class main:
    init = 800
    script_path = os.path.abspath(__file__)
    script_dir = os.path.split(script_path)[0]  # find the folder
    script_dir = os.path.join(script_dir, "csvfile")
    test_csv = "custom.csv"
    fin_path = os.path.join(script_dir, test_csv)
    customer_list = read_helper(fin_path).getRow()

    score_csv = "flag.csv"
    score_path = os.path.join(script_dir, score_csv)
    score_list = read_helper(score_path).getRow()

    weight_csv = "weight.csv"
    weight_path = os.path.join(script_dir, weight_csv)
    weight_list = read_helper(weight_path).getRow()

    res_list = calc_score.data_calc(customer_list, score_list, weight_list)


