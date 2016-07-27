$(function () {


    var Person = Backbone.Model.extend({
        defaults: {
            name: "Котов Егор Владимирович",
            job: "Программист",
            office: "МЭСИ",
            phone: "89157029579",
            date: "21.06.2016"
        },

        validate: function (attrs) {
            if ($.trim(attrs.job) == 0) {
                return "Введите должность";
            }
        }

    })


    var viewForm = Backbone.View.extend({
        el:'#doc-form',
        events: {
            'keyup input': 'showName'
        },
        showName: function (e) {
            newPerson.set($(e.currentTarget).attr('id'), $(e.currentTarget).val());
        }
    })

    
    var viewPerson = Backbone.View.extend({
        initialize: function () {
            this.model.on('change', this.render, this);
        },
        tagName: 'div',
        className: 'doc',
        template: _.template($('#template-name').html()),
        render: function () {
            this.$el.html( this.template( this.model.toJSON()) );
            return this;
        }
    })

    
    
    var newPerson = new Person;
    var newForm = new viewForm;

    var vivod = new viewPerson({model: newPerson});
    
    $('.right').html(vivod.render().el);


})