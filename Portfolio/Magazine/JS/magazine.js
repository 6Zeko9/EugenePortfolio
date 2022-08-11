$("select").on("click" , function() {

    $(this).parent(".select-box").toggleClass("open");

});

$(document).mouseup(function (e)
{
    var container = $(".select-box");

    if (container.has(e.target).length === 0)
    {
        container.removeClass("open");
    }
});


$("select").on("change" , function() {

    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");

    label.find(".label-desc").html(selection);

});

function app() {
    const option = document.querySelectorAll('option')
    const cards = document.querySelectorAll('.cardd')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('hide')
                item.classList.remove('anime')
            }
        })
    }

    option.forEach((option) => {
        option.addEventListener('click', () => {
            const currentCategory = option.dataset.filter
            filter(currentCategory, cards)
            console.log(option.dataset.filter)
        })
    })

    cards.forEach((cardd) => {
        cardd.ontransitionend = function () {
            if (cardd.classList.contains('anime')) {
                cardd.classList.add('hide')
            }
        }
    })
}
app()