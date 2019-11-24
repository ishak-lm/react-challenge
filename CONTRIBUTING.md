# How to contribute

## Testing

We are testing all the app with Javascript in async/await style. Please write test examples for new code you create.

## Commit guidelines

```
git checkout -b feature/...
git checkout -b fix/...
```

```
[ADD] new file/function/feature
[UPD] update file/function/feature
[UPG] upgrade dependency
[ARC] refactor part of the project
[DEL] remove file/function/feature
[WIP] work in progress
```

```
git checkout develop
git merge origin feature/...
git merge origin fix/...
```

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "[???] A brief summary of the commit
    >
    > A paragraph describing what changed and its impact."

## Coding conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

- We indent using two spaces (soft tabs)
- We use async/await for tests
