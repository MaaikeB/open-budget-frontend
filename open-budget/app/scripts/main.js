define([
    "backbone",
    "modernizr",
    "hello",
    "searchbar",
    "training",
    "subscribe",
    "team",
    "main_page_vis",
    "budget_view",
    "breadcrumb_header",
    "analysis_header",
    "single_changegroup",
    "Hasadna/oBudget/Pages/Exemptions/Main",
    "Hasadna/oBudget/Router",
    'scripts/modelsHelpers/PageModel',
    'scripts/URLSchemeHandler',
    'scripts/appConfig',
    'combined_history',
    "bootstrap-tour"
    ], function (
      Backbone,
      modernizr,
      hello,
      searchbar,
      Training,
      sub,
      team,
      MainPageVis,
      budget_view,
      breadcrumb_header,
      analysis_header,
      single_changegroup,
      ExemptionsPage, Router, PageModel, URLSchemeHandler, appConfig, CombinedHistory, tour
    ) {

      require('styles/main.less');

      window.DEFAULT_HOME = "#main//2015/main";

      var URLSchemeHandlerInstance = new URLSchemeHandler();
      window.URLSchemeHandlerInstance = URLSchemeHandlerInstance;

      var pageModel = new PageModel();
      pageModel.switchView(URLSchemeHandlerInstance.linkParameters);

      window.pageModel = pageModel;

      var router = new Router();

      router.on("route:exemptions", function () {
        new ExemptionsPage().start({baseURL: appConfig.baseURL});
      });

      router.on("route:entity", function (entityId, publicationId) {
        new ExemptionsPage().start({baseURL: appConfig.baseURL, entityId: entityId, publicationId: publicationId});
      });

      Backbone.history.start({pushState: false});

      var training = new Training({
        el: "#intro-link",
        model: pageModel,
        flow: URLSchemeHandlerInstance.linkParameters.flow
      });

    var mainPageVis = new MainPageVis({el: "#main-page-article", model: pageModel });

    var combinedHistory = new CombinedHistory([], {pageModel: pageModel});
});

