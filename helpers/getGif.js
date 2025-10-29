const getGif = ()=> {

    const gifArr = [
        'https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUydmQwYXF1MDlpbjg5NGswYjBhNmJzZnU4c3d1dTlxNnU1cnNjanRzNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/okfvUCpgArv3y/200w.gif',

        'https://media.tenor.com/lXiIpHHdtRMAAAAM/dancing-trolls-band-together.gif',

        'https://www.fantasticmedia.co.uk/wp-content/uploads/2016/05/eRnPdf8nTTeLiczNe8Ea_Hurdle-Fail-giphy.com_.gif',

        'https://media.tenor.com/9otm_TMn3c4AAAAM/boy-group-kpop.gif',

        'https://media.tenor.com/ZbuZ6xZ6oCMAAAAM/byuntear-svt.gif',

        'https://media.tenor.com/EtMWieV-86MAAAAM/hype-yay.gif',

        'https://i.redd.it/kpvapfpo0bdf1.gif',

        'https://media.tenor.com/smHDI501YzIAAAAM/sungchan-nct.gif',

        'https://i.pinimg.com/originals/ae/03/ac/ae03ac8a1fe45b4244642f2f78816eae.gif'
    ]

    const randomGif = gifArr[Math.floor(Math.random() * gifArr.length)]

    return randomGif
}

module.exports = getGif