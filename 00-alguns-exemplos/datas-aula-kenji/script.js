let now = new Date();

const week = ["domingo", "segunda","terca", "quarta", "quinta", "sexta", "sabado"];

const months = ["janeito", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

const weekDay = week[now.getUTCDay()];

const day = now.getUTCDate();

const month = now.getUTCMonth();

const year = now.getFullYear();

const hours = now.getUTCHours();

const minutes = now.getUTCMinutes();

const seconds = now.getUTCSeconds();

console.log("week, day, mont, year, hours, minutes, seconds",week,day,month,year,hours,minutes,seconds);
