// 创建一个模板引擎:
var tpl = new Template('<p>Today: { date }</p>\n<a href="/{ user.id|safe }">{ user.company }</a>');
// 渲染得到HTML片段:
var model = {
    date: 20150316,
    user: {
        id: 'A-000&001',
        company: 'AT&T'
    }
};
var html = tpl.render(model);
console.log(html);
