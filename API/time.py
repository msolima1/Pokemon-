import time


def count():

    start_time = time.time()

    for i in range(10000000):
        print(i)

    end_time = time.time()
    printing_time = end_time - start_time
    print('the printing time is..', printing_time)


if __name__ == '__main__':
    count()
