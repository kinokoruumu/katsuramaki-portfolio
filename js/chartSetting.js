var ctx = $('#myChart')

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["デザイン", "オリジナリティ", "コンテンツ", "アクセサビリティ", "写真", "文章力", "ブランド"],
        datasets: [
            {
                //凡例
                label: "A社",
                //背景色
                backgroundColor: "rgba(187,211,230,0.2)",
                //枠線の色
                borderColor: "rgba(179,181,198,1)",
                //結合点の背景色
                pointBackgroundColor: "rgba(179,181,198,1)",
                //結合点の枠線の色
                pointBorderColor: "#fff",
                //結合点の背景色（ホバーしたとき）
                pointHoverBackgroundColor: "#fff",
                //結合点の枠線の色（ホバーしたとき）
                pointHoverBorderColor: "rgba(179,181,198,1)",
                //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
                hitRadius: 5,
                //グラフのデータ
                data: [65, 59, 90, 81, 56, 55, 40]
            }
        ]
    }
})