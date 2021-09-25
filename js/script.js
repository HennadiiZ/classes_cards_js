





class NewCards{
    constructor(url, alt, title, descr, priceOrig, price,  parentSelector){
        
        this.url = url;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.priceOrig = priceOrig;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.UkrCurrency = 27;
        this.moneyRate()
    }
    moneyRate(){
        this.price = this.price * this.UkrCurrency ;
    }

    render(){
        const element = document.createElement('div');
        element.innerHTML = `<div class="menu__item">
        <img ${this.url} ${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Price:</div>
            <div class="menu__item-total"><span>${this.price}</span> uah </div>
            <div class="menu__item-total">(${this.priceOrig}usd )</div>
        </div>
        `;
        this.parent.append(element);
    }

}

new NewCards(
    'src="img/paria.png"',
    'alt="paria"', 
    'Converse x paria /FARZANEH Pro Leather X2 Tech',
    'In a new collaboration with Converse, paria /FARZANEH revisits the Pro Leather X2, a revamped take on the iconic court-to-street style. This edition complements the silhouettes exaggerated outsole and fashion-forward lean with a utilitarian zip-up design inspired by ‘90s sportswear and Iranian heritage. The neoprene bootie construction features a zip-up outer shell with a sleek color gradient print and hits of suede. paria /FARZANEH’s signature Iranian paisley, crafted with traditional wood blocking techniques, appears on the interior and sock liner. It’s an expression of heritage and modern style—with practical function for a world that demands it',
    155,
    155,
    '.menu .container' 
).render();


new NewCards(
    'src="img/paria-purple.png"',
    'alt="paria"', 
    'Converse x paria /FARZANEH Pro Leather X2 Tech',
    'In a new collaboration with Converse, paria /FARZANEH revisits the Pro Leather X2, a revamped take on the iconic court-to-street style. This edition complements the silhouettes exaggerated outsole and fashion-forward lean with a utilitarian zip-up design inspired by ‘90s sportswear and Iranian heritage. The neoprene bootie construction features a zip-up outer shell with a sleek color gradient print and hits of suede. paria /FARZANEH’s signature Iranian paisley, crafted with traditional wood blocking techniques, appears on the interior and sock liner. It’s an expression of heritage and modern style—with practical function for a world that demands it',
    155,
    155,
    '.menu .container' 
).render();


new NewCards(
    'src="img/comme.png"',
    'alt="comme"', 
    'Converse x Comme des Garçons PLAY Chuck 70 High Top',
    'CLASSIC CHUCK 70 WITH A PLAYFUL TWIST.           Wear your heart on your shoes with the Converse x Comme des Garçons PLAY Chuck 70 sneaker. This street-ready style features the premium Chuck details you know and love, paired with a whimsical heart-and-eyes graphic peeking just above the sole. Eye-catching is an understatement.Wear your heart on your shoes with the Converse x Comme des Garçons PLAY Chuck 70 sneaker. This street-ready style features the premium Chuck details you know and love, paired with a whimsical heart-and-eyes graphic peeking just above the sole. Eye-catching is an understatement.',
    160,
    160,
    '.menu .container' 
).render();



