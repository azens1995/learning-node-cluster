# Node Cluster

This is a sample repository created while learning node-cluster from Udemy course.

## Performing LoadTest

1. Install `loadtest` package globally using command:

```bash
npm install -g loadtest
```

2. After the package is installed, run the node server, and run loadtest using following command.

```bash
loadtest -n 1000 -c 100 --rps 200 http://localhost:3000\?number\=20
```

- `-n` means the number of request that we want to send
- `-c` means the number of concurrent requests
- `--rps` means request per second
