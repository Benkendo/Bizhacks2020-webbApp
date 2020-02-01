from django.shortcuts import render


def dataPost(value, request):
    return render(request, 'index/', {"data": value})


def login(request):
    return render(request, 'login.html')


def reg(value, request):
    if request.method == 'POST':
        name=request.POST.get('username')
        pwd=request.POST.get('password')
        if name == 'abc' and pwd == 'cde':
            id = 1
        elif name == 'ccc' and pwd == 'edf':
            id = 2
    return render(request, 'login.html', res_list[id])