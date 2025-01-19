function (t) {
    var e = t.item.data;
        a = this.item.data;
        
        crit = Math.floor(100 * Math.random()) <= 100 * e.fatal;
        attack_mod = (5 - 333 * Math.random() % 10) / 100;
        defense_mod = (5 - 444 * Math.random() % 10) / 100;
        
        attack = Math.floor(e.attack * (1 + attack_mod));
        defense = Math.floor(a.defense * (1 + defense_mod));
        outcome = Math.floor((attack - defense) * (crit ? 2 : 1) * (1 + e.fatal));
    
        return (1 === e.gift && 2 === a.gift 
        || 2 === e.gift && 5 === a.gift 
        || 3 === e.gift && 4 === a.gift 
        || 4 === e.gift && 1 === a.gift 
        || 5 === e.gift && 3 === a.gift) 
        && (outcome *= 1.1),
        attack - defense < .1 * attack 
        && (outcome = .1 * attack),
        outcome = parseint(outcome),
        this.blood = Math.max(this.blood - outcome, 0),
        this.blood <= 0 
        && (this.death = !0), {
            from: t,
            to: this,
            hitValue: l,
            blood: this.blood,
            death: this.death
        }
}