import multiprocessing
import time


def worker(start, end, return_dict):
    count = 0
    for i in range(start, end):
        count += 1
        print(count)
    return_dict[start] = count


if __name__ == "__main__":
    limit = 10_000_000
    num_workers = multiprocessing.cpu_count()
    chunk_size = limit // num_workers
    processes = []
    manager = multiprocessing.Manager()
    return_dict = manager.dict()

    start_time = time.time()

    for i in range(num_workers):
        start = i * chunk_size
        end = start + chunk_size
        if i == num_workers - 1:
            end = limit
        p = multiprocessing.Process(
            target=worker, args=(start, end, return_dict))
        processes.append(p)
        p.start()

    for p in processes:
        p.join()

    total_count = sum(return_dict.values())
    end_time = time.time()
    elapsed_time = end_time - start_time

    print(f"Total count: {total_count}")
    print(f"Time taken: {elapsed_time:.2f} seconds")
