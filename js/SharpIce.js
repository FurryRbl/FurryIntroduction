const SharpIce = {
    post: {
        Render: (postName) => {
            //渲染文章
            $.ajax({
                url: `post/${postName}/post.md`,
                dataType: 'text',
                success: function (markdownText) {
                    var converter = new showdown.Converter();
                    // 渲染并插入 HTML 元素
                    $('#post-content').html(converter.makeHtml(markdownText));
                }
            });
            // 渲染文章元数据
            $.ajax({
                url: `post/${postName}/metadata.json`,
                dataType: 'text',
                success: function (JsonText) {
                    var postMetaData = JSON.parse(JsonText); // 转换为对象
                    $('#post-title').html(postMetaData.Title)
                }
            });
        }
    }
}