class Anime{
    constructor(title, desc, episodes, rate){
        this.title = title;
        this.description = desc;
        this.episodes = episodes;
        this.rating = rate;
    }

    setDescription(desc){
        this.description = desc;
    }

    relay(){
        console.info(this.title + "is now online with episodes : " + this.episodes);
    }

    changeRating(rate){
        console.warn(`Rating has been updated from ${this.rating} to ${rate}.`)
        this.rating = rate;
    }

    logData(){
        console.log(`Title : ${this.title}, Description : ${this.description}, Episodes : ${this.episodes}, Rating : ${this.rating}`);
    }

};


let jujutsu = new Anime("Jujutsu Kaisen", "Lets kill Sukuna", 24, 4.5);
jujutsu.logData();
jujutsu.relay();
jujutsu.changeRating(6);
jujutsu.logData();

jujutsu.title = "Kaisen Itadoori Yuji";
console.log(jujutsu.title);