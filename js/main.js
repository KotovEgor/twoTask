/**
 * Created by Администратор on 21.06.2016.
 */
var Person = Backbone.Model.extend({
    defaults:{
        person: "Котов Егор Владимирович",
        job: "Программист",
        office: "МЭСИ",
        phone: "89157029579",
        date: "21.06.2016"

    },

    validate: function( attrs ){
        console.log(attrs);
        if ( ! attrs.job ){
            return "Введите должность";
        }
    }

})