// USA
export const locale = {
	lang: 'en',
	data: {
		TRANSLATOR: {
			SELECT: 'Выберите ваш язык',
		},
		MENU: {
			NEW: 'Новый',
			ACTIONS: 'Действие',
			CREATE_POST: 'Добавить пост',
			PAGES: 'Страницы',
			FEATURES: 'Особенности',
			APPS: 'Приложения',
			DASHBOARD: 'Дашборд',
			COMPONENT: 'Компоненты',
		},
		AUTH: {
			GENERAL: {
				OR: 'Или',
				SUBMIT_BUTTON: 'Войти',
				NO_ACCOUNT: 'Уже зарегистрированы?',
				SIGNUP_BUTTON: 'Регистрация',
				FORGOT_BUTTON: 'Запомнить пароль',
				BACK_BUTTON: 'Назад',
				PRIVACY: 'Конфиденциальность',
				LEGAL: 'Правила',
				CONTACT: 'Контакт',
			},
			LOGIN: {
				TITLE: 'Войти в аккаунт',
				BUTTON: 'Войти',
			},
			FORGOT: {
				TITLE: 'Забыли пароль?',
				DESC: 'Введите ваш email чтобы восставновить пароль',
				SUCCESS: 'Ваш аккаунт успешно восстановлен.'
			},
			REGISTER: {
				TITLE: 'Регистрация',
				DESC: 'Enter your details to create your account',
				SUCCESS: 'Your account has been successfuly registered.'
			},
			INPUT: {
				EMAIL: 'Email',
				FULLNAME: 'Имя',
				PASSWORD: 'Пароль',
				CONFIRM_PASSWORD: 'Повторите пароль',
				USERNAME: 'Имя пользователя'
			},
			VALIDATION: {
				INVALID: '{{name}} не подходит',
				REQUIRED: '{{name}} обязательно',
				MIN_LENGTH: '{{name}} Миннимальное количество символов {{min}}',
				AGREEMENT_REQUIRED: 'Принятие условий и положений обязательно',
				NOT_FOUND: 'The requested {{name}} is not found',
				INVALID_LOGIN: 'Не корректный логин',
				REQUIRED_FIELD: 'Обязательное поле',
				MIN_LENGTH_FIELD: 'Миннимальное количество символов:',
				MAX_LENGTH_FIELD: 'Максимальное количество символов:',
				INVALID_FIELD: 'Поле не валидно',
			}
		},
		ECOMMERCE: {
			COMMON: {
				SELECTED_RECORDS_COUNT: 'Selected records count: ',
				ALL: 'All',
				SUSPENDED: 'Suspended',
				ACTIVE: 'Active',
				FILTER: 'Filter',
				BY_STATUS: 'by Status',
				BY_TYPE: 'by Type',
				BUSINESS: 'Business',
				INDIVIDUAL: 'Individual',
				SEARCH: 'Search',
				IN_ALL_FIELDS: 'in all fields'
			},
			ECOMMERCE: 'eCommerce',
			CUSTOMERS: {
				CUSTOMERS: 'Customers',
				CUSTOMERS_LIST: 'Customers list',
				NEW_CUSTOMER: 'New Customer',
				DELETE_CUSTOMER_SIMPLE: {
					TITLE: 'Customer Delete',
					DESCRIPTION: 'Are you sure to permanently delete this customer?',
					WAIT_DESCRIPTION: 'Customer is deleting...',
					MESSAGE: 'Customer has been deleted'
				},
				DELETE_CUSTOMER_MULTY: {
					TITLE: 'Customers Delete',
					DESCRIPTION: 'Are you sure to permanently delete selected customers?',
					WAIT_DESCRIPTION: 'Customers are deleting...',
					MESSAGE: 'Selected customers have been deleted'
				},
				UPDATE_STATUS: {
					TITLE: 'Status has been updated for selected customers',
					MESSAGE: 'Selected customers status have successfully been updated'
				},
				EDIT: {
					UPDATE_MESSAGE: 'Customer has been updated',
					ADD_MESSAGE: 'Customer has been created'
				}
			}
		}
	}
};
