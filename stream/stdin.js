process.stdin.on('readable', function() {
    var buf = process.stdin.read(3);
    console.dir(buf);
    //还对剩下的数据感兴趣，我们可以使用.read(0)来完成这件事：
    process.stdin.read(0);
});