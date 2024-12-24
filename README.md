# Node Cluster

This is a sample repository created while learning node-cluster from Udemy course.

## Performing LoadTest

### LoadTest package

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

### Artillery package

1. Install artillery globally using command: `npm install -g artillery`.

2. Execute following command

```bash
artillery quick --count 10 -n 20 http://localhost:3000?number=20
```

where

- `quick` represent adhoc requests
- `--count` represent number of the users
- `-n` represent number of request by each user
