$(document).ready(function() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ff3366'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff3366',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'window',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true
            }
        },
        retina_detect: true
    });

    new Typed('#typed-text', {
        strings: [
            "I'm 16 years old and have been playing Minecraft for 6 years.",
            "I've been a Minecraft developer for 3 years.",
            "Creating and managing numerous Minecraft servers."
        ],
        typeSpeed: 20,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 50,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });

    function fetchPlayerCount(serverId, elementId) {
        $.ajax({
            url: `https://api.minetools.eu/ping/${serverId}`,
            method: 'GET',
            success: function(data) {
                if (data.players && data.players.online !== undefined) {
                    $(`#${elementId}`)
                        .text(`${data.players.online} players online`)
                        .css('color', '#ff3366');
                } else {
                    $(`#${elementId}`)
                        .text('Server offline')
                        .css('color', '#666666');
                }
            },
            error: function(err) {
                console.error('Error fetching player count:', err.toString());
                $(`#${elementId}`).text('Unable to fetch status');
            }
        });
    }

    function updatePlayerCounts() {
        fetchPlayerCount('45.81.18.53:25565', 'playerCountMultiXNetwork');
        fetchPlayerCount('play.minercraftmc.com', 'playerCountMinerCraft');
    }

    updatePlayerCounts();
    setInterval(updatePlayerCounts, 10000);

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    function redirect() {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /android|iphone|ipad|ipod|windows phone/i.test(userAgent);
        const isTablet = /tablet/i.test(userAgent);
        const isLaptopOrDesktop = /windows|macintosh|linux/i.test(userAgent);
  
        if (!isMobile && !isTablet && !isLaptopOrDesktop) {
            window.history.back(); 
        }
    };
    function ctrlShiftKey(e, keyCode) {
        return e.ctrlKey && e.shiftKey && e.which === keyCode.charCodeAt(0);
    }
  
    $(document).on('keydown', function(e) {
        if (
            e.which === 123 ||
            ctrlShiftKey(e, "I") ||
            ctrlShiftKey(e, "J") ||
            ctrlShiftKey(e, "C") ||
            (e.ctrlKey && e.which === "U".charCodeAt(0) /* 85 */)
        ) {
            return false;
        }
    });
    
    $(document).on("contextmenu", function(event) {
        event.preventDefault();
    });
  
    redirect();
});
