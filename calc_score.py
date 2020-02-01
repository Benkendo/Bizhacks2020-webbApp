
def data_calc(customer_list, score_list, weight_list):
    for i in range(1, len(score_list)):
        for j in range(1, len(score_list[i])):
            customer_list[i][1] = \
                float(customer_list[i][1]) + float(score_list[i][j])*float(weight_list[1][j-1])
    return customer_list