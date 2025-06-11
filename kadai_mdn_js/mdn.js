// 現在のシステム時刻に基づいてDateオブジェクトを作成
const now = new Date();

// 年を取得
// getFullYear()は西暦の年を4桁で返す。
const year = now.getFullYear();

// 月を取得
// getMonth()は0（1月）から11（12月）までの整数を返す。
// 実際の月を取得するには+1する必要がある。
const month = now.getMonth() + 1;

// 日を取得
// getDate()は1から31までの整数を返す。
const day = now.getDate();

// 連結して「2024年10月12日」の形式で出力
console.log(year + "年" + month + "月" + day + "日");