var contactSupportIssue=function(){"use strict";var t={init:function(){t.popupSingleContent(),t.setupClosePopupBtn(),t.buildSingleContentShortLink()},popupSingleContent:function(){$(".popup-area").addClass("showed"),$("body").addClass("support-popup-fixed")},setupClosePopupBtn:function(){var t=$(".popup-area"),n=t.find(".btn-close"),o=n.data("url");n.length>0&&"undefind"!=typeof o&&n.off("click").on("click",function(){location.href=o})},buildSingleContentShortLink:function(){$(".go-to-page").attr("data-clipboard-text",location.href),new Clipboard(".go-to-page").on("success",function(t){$(".copy-msg").addClass("show"),t.clearSelection()})}};return t}();$(document).ready(function(){"use strict";contactSupportIssue.init()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3Qtc3VwcG9ydC1pc3N1ZS5qcyJdLCJuYW1lcyI6WyJjb250YWN0U3VwcG9ydElzc3VlIiwiaW5pdCIsInBvcHVwU2luZ2xlQ29udGVudCIsInNldHVwQ2xvc2VQb3B1cEJ0biIsImJ1aWxkU2luZ2xlQ29udGVudFNob3J0TGluayIsIiQiLCJhZGRDbGFzcyIsInBvcEFyZWEiLCJjbG9zZUJ0biIsImZpbmQiLCJyZXR1cm5VcmwiLCJkYXRhIiwibGVuZ3RoIiwib2ZmIiwib24iLCJsb2NhdGlvbiIsImhyZWYiLCJhdHRyIiwiQ2xpcGJvYXJkIiwiZSIsImNsZWFyU2VsZWN0aW9uIiwiZG9jdW1lbnQiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IkFBQ0EsR0FBSUEscUJBQXVCLFdBQzFCLFlBRUEsSUFBSUEsSUFDSEMsS0FBTSxXQUNMRCxFQUFvQkUscUJBQ3BCRixFQUFvQkcscUJBQ3BCSCxFQUFvQkksK0JBRXJCRixtQkFBb0IsV0FDVkcsRUFBRSxlQUFlQyxTQUFTLFVBQzFCRCxFQUFFLFFBQVFDLFNBQVMsd0JBRXZCSCxtQkFBb0IsV0FDekIsR0FBSUksR0FBVUYsRUFBRSxlQUNIRyxFQUFXRCxFQUFRRSxLQUFLLGNBQ3hCQyxFQUFZRixFQUFTRyxLQUFLLE1BQzFCSCxHQUFTSSxPQUFTLEdBQTBCLGtCQUFkRixJQUM5QkYsRUFBU0ssSUFBSSxTQUFTQyxHQUFHLFFBQVMsV0FDOUJDLFNBQVNDLEtBQU9OLEtBSTVCTiw0QkFBNkIsV0FDekJDLEVBQUUsZUFBZVksS0FBSyxzQkFBdUJGLFNBQVNDLE1BQ3RDLEdBQUlFLFdBQVUsZUFFcEJKLEdBQUcsVUFBVyxTQUFTSyxHQUM3QmQsRUFBRSxhQUFhQyxTQUFTLFFBSXhCYSxFQUFFQyxvQkFLakIsT0FBT3BCLEtBR1JLLEdBQUVnQixVQUFVQyxNQUFNLFdBQ2pCLFlBQ0F0QixxQkFBb0JDIiwiZmlsZSI6ImNvbnRhY3Qtc3VwcG9ydC1pc3N1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsIENsaXBib2FyZCovXG52YXIgY29udGFjdFN1cHBvcnRJc3N1ZSA9IChmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBjb250YWN0U3VwcG9ydElzc3VlID0ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHRjb250YWN0U3VwcG9ydElzc3VlLnBvcHVwU2luZ2xlQ29udGVudCgpO1xuXHRcdFx0Y29udGFjdFN1cHBvcnRJc3N1ZS5zZXR1cENsb3NlUG9wdXBCdG4oKTtcblx0XHRcdGNvbnRhY3RTdXBwb3J0SXNzdWUuYnVpbGRTaW5nbGVDb250ZW50U2hvcnRMaW5rKCk7XG5cdFx0fSxcblx0XHRwb3B1cFNpbmdsZUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnBvcHVwLWFyZWEnKS5hZGRDbGFzcygnc2hvd2VkJyk7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3N1cHBvcnQtcG9wdXAtZml4ZWQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0dXBDbG9zZVBvcHVwQnRuOiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHBvcEFyZWEgPSAkKCcucG9wdXAtYXJlYScpLFxuICAgICAgICAgICAgICAgIGNsb3NlQnRuID0gcG9wQXJlYS5maW5kKCcuYnRuLWNsb3NlJyksXG4gICAgICAgICAgICAgICAgcmV0dXJuVXJsID0gY2xvc2VCdG4uZGF0YSgndXJsJyk7XG4gICAgICAgICAgICBpZiAoY2xvc2VCdG4ubGVuZ3RoID4gMCAmJiB0eXBlb2YgcmV0dXJuVXJsICE9PSAndW5kZWZpbmQnKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VCdG4ub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gcmV0dXJuVXJsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBidWlsZFNpbmdsZUNvbnRlbnRTaG9ydExpbms6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLmdvLXRvLXBhZ2UnKS5hdHRyKCdkYXRhLWNsaXBib2FyZC10ZXh0JywgbG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICB2YXIgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZCgnLmdvLXRvLXBhZ2UnKTtcblxuICAgICAgICAgICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICQoJy5jb3B5LW1zZycpLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIC8vICAgICAkKCcuY29weS1tc2cnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgIC8vIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIGUuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXHR9O1xuXG5cdHJldHVybiBjb250YWN0U3VwcG9ydElzc3VlO1xufSgpKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Y29udGFjdFN1cHBvcnRJc3N1ZS5pbml0KCk7XG59KTtcblxuIl19
