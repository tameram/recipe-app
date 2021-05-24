const r = new Renderer()
const getRecipes = function () {
    const ingredient = $('#ingredient').val()
    $.get(`/sanity/${ingredient}`, function (results) {
        ingredients =[]
        for (const product of results) {
            let _product = {
                ingredients : Object.values(product.ingredients),
                title : product.title ,
                thumbnail : product.thumbnail ,
                href : product.href
            }
            ingredients.push(_product)
        }
        r.render(ingredients)

    })
}

const clickImage  = function(firstIngredient){
    const _data = firstIngredient.alt.split(',');
    alert(_data[0])
}

