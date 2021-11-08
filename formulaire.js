class Todoform {
    constructor (form, callback){
        this.form = form 
        this.title = form.querySelector('.title')
        this.lieu = form.querySelector('.lieu')
        this.heure = form.querySelector('.heure')
        this.description = form.querySelector('.description')


        this.callback = callback
        this.addListeners()
    }
addListeners(){
    //affecte la globalité du this 
    this.form.addEventListener('submit', this.onsubmit.bind(this))

}
onsubmit(event){
    //empecher les comportements natifs des browsers
    event.preventDefault()
    const result = {
        title: this.title.value,
        lieu: this.lieu.value,
        heure: this.heure.value,
        description : this.description.value

    }
    this.callback(result)
}
}
