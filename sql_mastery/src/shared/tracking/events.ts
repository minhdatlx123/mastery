export const APP_EVENTS = {
  LOGIN_SUCCESS: 'login_success',
  LOGOUT_CLICK: 'logout_click',
  MODULE_SELECTED: 'module_selected',
  TERMINAL_COMMAND_SUBMIT: 'terminal_command_submit',
  TERMINAL_RUN_SAMPLE: 'terminal_run_sample',
  AI_EXPLAIN_REQUEST: 'ai_explain_request',
  AI_CHAT_SEND: 'ai_chat_send',
  QUIZ_NEXT_QUESTION: 'quiz_next_question',
  QUIZ_GENERATE_BY_AI: 'quiz_generate_by_ai',
  QUIZ_MODAL_COMPLETE: 'quiz_modal_complete',
} as const;

export type AppEventName = (typeof APP_EVENTS)[keyof typeof APP_EVENTS];
