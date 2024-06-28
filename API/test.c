#include <stdio.h>
#include <time.h>

int main()
{
    long long i;
    clock_t start, end;
    double cpu_time_used;

    // Start measuring time
    start = clock();

    // Counting from 1 to 10 million
    for (i = 1; i <= 10000000; i++)
    {
        printf("%lld\n", i);
    }

    // Stop measuring time
    end = clock();

    // Calculate the time taken
    cpu_time_used = ((double)(end - start)) / CLOCKS_PER_SEC;

    // Print the total time taken
    printf("Time taken to count to 10 million: %f seconds\n", cpu_time_used);

    return 0;
}