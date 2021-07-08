Development
===========

## Run Crowd

```
mvn clean package crowd:debug
```

To stop Crowd, hit `[Ctrl]+[D]`.

## Release

In order to create a release, run:

```
mvn release:prepare
```

Enter the desired release version, e.g. `0.0.5`.

Enter the desired release tag, e.g. `v0.0.5`.

Enter the desired next snapshot version, e.g. `0.0.6-SNAPSHOT`.

Done.

The command will already push the release and snapshot commits separately to the repository.

When done, finally execute:

```
mvn release:clean
```
