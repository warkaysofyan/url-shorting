$(document).ready(function () {
    let A = true;
    $('.burger').on('click', () => {
        if (A) {
            $('.nav-2').css('display', 'flex');
            A = false;
        } else {
            $('.nav-2').css('display', 'none');
            A = true;
        }
    });

    $('#submit').on('click', () => {
        let B = $('#inp').val();
        let reg = /\./g;
        let isLink = reg.test(B);
        if (B == '' || !isLink) {
            $('#inp').css('border', '2px solid red');
            micron
                .getEle('#inp')
                .interaction('shake')
                .duration('.45')
                .timing('ease-out');
        } else {
            $('#inp').css('border', '2px solid white');

            $.ajax({
                url: `https://api.shrtco.de/v2/shorten?url=${B}`,
                success: function (result) {
                    if (result.ok) {
                        $('#response-container').append(`
                                <div class="box-resulte r1">
                                <div>${result.result.original_link}</div>
                                <hr />
                                <div>
                                    <a href="${result.result.full_short_link2}" target="_blank">${result.result.full_short_link2}</a>
                                    <button id="copy">copy</button>
                                </div>
                            </div>`);
                    }
                },
            });
        }
    });

    /* $('#copy').on('click', () => {
        console.log('okey');
        /* let text = this.prev().html();
        navigator.clipboard.writeText(text); 
    }); */
});
