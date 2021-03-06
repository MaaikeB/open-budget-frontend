define ['backbone', 'underscore', 'scripts/modelsHelpers/BudgetItem', 'scripts/appConfig'], (Backbone, _, BudgetItem, appConfig) ->

  class BudgetHistory extends Backbone.Collection

      model: BudgetItem

      initialize: (models, options) ->
              @options = options

      fetch: ->
        super(dataType: appConfig.dataType, reset: true)

      url: ->
              "#{appConfig.baseURL}/api/budget/#{@options.budgetCode}/#{@options.budgetYear}/equivs"

      comparator: (m) -> m.get('year')

      getForYear: (year) ->
          model = _.sortBy( @models, (x) -> Math.abs(x.get('year') - year) )
          if model.length > 0
              model[0]
          else
              @models[@models.length-1]

  return BudgetHistory
