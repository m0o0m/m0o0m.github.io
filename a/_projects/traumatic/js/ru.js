/* For validation plugin - see it above */

(function($) {
	$.fn.validationEngineLanguage = function() {};
	$.validationEngineLanguage = {
		newLang: function() {
			$.validationEngineLanguage.allRules = 	{"required":{    			// Add your regex rules here, you can take telephone as an example
						"regex":"none",
						"alertText":"Это поле необходимо заполнить",
						"alertTextCheckboxMultiple":"Вы должны поставить галочку",
						"alertTextCheckboxe":"Вы должны поставить галочку"},
					"length":{
						"regex":"none",
						"alertText":"Допустимое количество знаков:",
						"alertText2":" — ",
						"alertText3": " "},
					"maxCheckbox":{
						"regex":"none",
						"alertText":"Вы выбрали больше пунктов, чем можете"},	
					"minCheckbox":{
						"regex":"none",
						"alertText":"Пожалуйста, выберите что-нибудь (минимум —",
						"alertText2":")"},	
					"confirm":{
						"regex":"none",
						"alertText":"Введенный текст не совпадает"},		
					"telephone":{
						"regex":"/^[0-9\-\(\)\-\+\ ]+$/",
						"alertText":"Неверный формат телефонного номера. Допускаются только цифры, дефисы, пробелы, скобки и плюс. Например: +7 (495) 987-65-43"},	
					"email":{
						"regex":"/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/",
						"alertText":"Неверный формат email-адреса"},	
					"date":{
                         "regex":"/^[0-9]{4}\-\[0-9]{1,2}\-\[0-9]{1,2}$/",
                         "alertText":"Неверный формат даты. Пожалуйста, введите сначала 4 цифры года, дефис, две цифры месяца, дефис, число (тоже две цифры)"},
					"onlyNumber":{
						"regex":"/^[0-9\ ]+$/",
						"alertText":"В этом поле допустимо вводить только цифры"},	
					"noSpecialCaracters":{
						"regex":"/^[0-9a-zA-Z]+$/",
						"alertText":"Здесь нельзя вводить специальные символы"},	
					"ajaxUser":{
						"file":"validateUser.php",
						"extraData":"name=eric",
						"alertTextOk":"Такое имя пользователя свободно",	
						"alertTextLoad":"Проверяется в базе данных",
						"alertText":"Такое имя пользователя занято"},	
					"ajaxName":{
						"file":"validateUser.php",
						"alertText":"Такое имя пользователя занято",
						"alertTextOk":"Такое имя пользователя свободно",	
						"alertTextLoad":"Проверяется в базе данных"},		
					"onlyLetter":{
						"regex":"/^[А-Яа-яA-Za-z\ \']+$/",
						"alertText":"Ничего, кроме букв в этом поле вводить не следует"}
					}	
		}
	}
})(jQuery);