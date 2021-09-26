const array = [
    {
        id: 1,
        name:'Barack Obama',
        age: 60,
        country:'USA', 
        date: '01 Jan 2022',
        subject: 'International Politics',
        picture: 'https://images.gr-assets.com/authors/1602177326p5/6356.jpg',
        priceOfTicket: 1200,
        rate: 4
        

    },
    {
        id: 2,
        name:'Dr. Zakir Naik',
        age: 55,
        country:'India',
        date: '01 Jan 2022',
        subject: 'Religious Motivation',
        picture: 'https://cdn-bhemb.nitrocdn.com/fwHRWjpOqBjnidmoGOQdWQIYsUkSWlWU/assets/static/optimized/rev-823f645/wp-content/themes/zakir/assets/img/content/about/intro_1.jpg',
        priceOfTicket: 1200,
        rate: 5
        

    },
    {
        id: 3,
        name:'Sri Sri Rabi Shankar',
        age: 60,
        country:'India', 
        date: '01 Jan 2022',
        subject: 'Meditation',
        picture: 'http://www.yogaiya.in/wp-content/uploads/2018/11/Sri-Sri-Ravi-Shankar-ji.png',
        priceOfTicket: 1000,
        rate: 5
        

    },
    {
        id: 4,
        name:'Sundor Pichai',
        age: 50,
        country:'India', 
        date: '02 Jan 2022',
        subject: 'Technology',
        picture: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg',
        priceOfTicket: 1000,
        rate: 4

    },
    {
        id: 5,
        name:'Jack Ma',
        age: 52,
        country:'China', 
        date: '02 Jan 2022',
        subject: 'Online Business',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg/220px-Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg',
        priceOfTicket: 1200,
        rate: 4

    },
    {
        id: 6,
        name:'Donald Trump',
        age: 75,
        country:'USA', 
        date: '02 Jan 2022',
        subject: 'Politics',
        picture: 'https://images.hindustantimes.com/img/2021/08/13/550x309/2021-06-30T201632Z_145659288_RC21BO9PEB9M_RTRMADP_3_USA-TRUMP_1625096830763_1628820292467.JPG',
        priceOfTicket: 800,
        rate: 3

    },
    {
        id: 7,
        name:'Sandeep Maheshari',
        age: 40,
        Country:'India', 
        date: '03 Jan 2022',
        subject: 'Life Goals',
        picture: 'https://yt3.ggpht.com/-r4rK1SpZ7qo/AAAAAAAAAAI/AAAAAAAAAAA/q_S3CCjYEDE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
        priceOfTicket: 1000,
        rate: 5

    },
    {
        id: 8,
        name:'Bill Gates',
        age: 65,
        country:'USA', 
        date: '03 Jan 2022',
        subject: 'Life with Technology',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpgg',
        priceOfTicket: 1100,
        rate: 5

    },
    {
        id: 9,
        name:'Bear Grylls',
        age: 45,
        country:'USA',
        date: '03 Jan 2022', 
        subject: 'War with Difficulties',
        picture: 'https://d2w1le1t5r6d3w.cloudfront.net/Team/_1200x801_crop_center-center_82_line/DSC06531.jpg',
        priceOfTicket: 800,
        rate: 3

    },
    {
        id: 10,
        name:'Abdullah Abu Sayeed',
        age: 82,
        country:'Bangladesh', 
        date: '04 Jan 2022',
        subject: 'Life Goals',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SNtWQHf_Hmc3sBMU7soVsE9GEt7ESJDtA4ch4dfz6Ri58PXF8G2wiM79UVkCCMeDArE&usqp=CAU',
        priceOfTicket: 1100,
        rate: 5
        

    },
    {
        id: 11,
        name:'Jeff Bezos',
        age: 55,
        country:'USA', 
        date: '05 Jan 2022',
        subject: 'Life of Entrepreneur',
        picture: 'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg',
        priceOfTicket: 1000,
        rate: 4

    },
    {
        id: 12,
        name:'Noman Ali Khan',
        age: 50,
        country:'USA', 
        date: '06 Jan 2022',
        subject: 'Goals of Life',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjahcUMgNlbB3IQrESvSFgJGP_zXnJprDXA&usqp=CAU',
        priceOfTicket: 1200,
        rate: 4.5

    },
    {
        id: 13,
        name:'Mufti Menk',
        age: 46,
        country:'Zimbabwean',
        date: '06 Jan 2022', 
        subject: 'Religious Motivation',
        picture: 'https://pbs.twimg.com/profile_images/1102171650982928385/JR6X6tOB_400x400.jpg',
        priceOfTicket: 1000,
        rate: 5

    },
    {
        id: 14,
        name:'Ayman Sadiq',
        age: 30,
        country:'Bangladesh', 
        date: '06 Jan 2022',
        subject: 'Life Hacks',
        picture: 'https://yt3.ggpht.com/ytc/AKedOLRDdAd3EsOozEFNrsPuPDz6SHb-qRTLVFED7BM_Wxs=s900-c-k-c0x00ffffff-no-rj',
        priceOfTicket: 500,
        rate: 4 

    },
    {
        id: 15,
        name:'Elon Musk',
        age: 50,
        country:'USA', 
        date: '06 Jan 2022',
        subject: 'Technology Business',
        picture: 'https://images.news18.com/ibnlive/uploads/2021/08/elon-musk-16303829933x2.png',
        priceOfTicket: 500,
        rate: 4 

    },
    {
        id: 16,
        name:'Dave Ramsey',
        age: 50,
        country:'USA', 
        date: '07 Jan 2022',
        subject: 'Media and Personality',
        picture: 'https://virtualspeech.com/img/motivational-speakers/Dave-Ramsey.jpg',
        priceOfTicket: 800,
        rate: 3

    },
    {
        id: 17,
        name:'Nick Vujicic',
        age: 40,
        country:'Australia', 
        date: '07 Jan 2022',
        subject: 'Overcome Difficulty',
        picture: 'https://virtualspeech.com/img/motivational-speakers/nick-vujicic.jpg',
        priceOfTicket: 1000,
        rate: 5

    },
    {
        id: 18,
        name:'Chris Gardner',
        age: 55,
        country:'USA', 
        date: '08 Jan 2022',
        subject: 'Life with Goals',
        picture: 'https://virtualspeech.com/img/motivational-speakers/chris-gardner.jpg',
        priceOfTicket: 700,
        rate: 4

    },
    {
        id: 19,
        name:'T. Harv Eker',
        age: 45,
        country:'USA', 
        date: '08 Jan 2022',
        subject: 'Life hacks',
        picture: 'https://virtualspeech.com/img/motivational-speakers/t-harv-eker.jpg',
        priceOfTicket: 700,
        rate: 4

    },
    {
        id: 20,
        name:'Mahathir Mohamad',
        age: 96,
        country:'Malaysia', 
        date: '09 Jan 2022',
        subject: 'Todays World',
        picture: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17B94/production/_111127179_gettyimages-1166058370.jpg',
        priceOfTicket: 1100,
        rate: 5

    },
    {
        id: 21,
        name:'Vivek Bindra',
        age: 45,
        country:'India', 
        date: '09 Jan 2022',
        subject: 'Life Goals',
        picture: 'https://yt3.ggpht.com/ytc/AKedOLR_E3OKtvaDM6ZzdpZb5OqZqS6KwAtEHNFt-DWVYw=s900-c-k-c0x00ffffff-no-rj',
        priceOfTicket: 800,
        rate: 3
       
    }
];


