class Renderer {
    render(data) {
        const source = $('#food-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ data });
        $('.foodList').append(newHTML);

    }
}


