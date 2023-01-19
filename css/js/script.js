$(document).ready(function() {
    let cartCountValue = 0;
    let cartCount = $('.cart .count');
    $(cartCount).text(cartCountValue);

    $(' .cart-btn').on('click', function() {
        let cartBtn = this;
        let cartCountPosition = $(cartCount).offset();
        let btnPosition = $(this).offset();
        let leftPos =
            cartCountPosition.left < btnPosition.left ?
            btnPosition.left - (btnPosition.left - cartCountPosition.left) :
            cartCountPosition.left;

        let topPos =
            cartCountPosition.top < btnPosition.top ?
            cartCountPosition.top : cartCountPosition.top;
        $(cartBtn)
            .append("<span class='count'>1</span>");

        $(cartBtn).find(".count").each(function(i, count) {
            $(count).offset({
                    left: leftPos,
                    top: topPos,
                })
                .animate({
                        opcity: 0
                    },
                    800,
                    function() {
                        $(this).remove();
                        cartCountValue++;
                        $(cartCount).text(cartCountValue);
                    }
                );
        });
    });
});
