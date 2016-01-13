define [
    'scripts/modelsHelpers/BudgetItem',
    'scripts/modelsHelpers/ChangeLine',
    'scripts/modelsHelpers/ChangeExplanation'
  ], (BudgetItem, ChangeLine, ChangeExplanation) ->

        # toLocaleJSON: (requestedLocale) ->
        #   locale = requestedLocale || "he"
        #   baseJSON = @toJSON()
        #   resultJSON = {}
        #   pageModel = window.pageModel
        #   for key, value of baseJSON
        #     normalizedKey = pageModel.supportFieldNormalizer.normalize(key, locale)
        #     if normalizedKey?
        #       resultJSON[normalizedKey] = value
        #
        #   return resultJSON

    models = {
        BudgetItem: BudgetItem
        ChangeLine: ChangeLine
        ChangeExplanation: ChangeExplanation
    }

    models
