//-----------------------------------------------------------
// UNSCRAMBLE 題庫設定檔
//-----------------------------------------------------------

//字卡交換方式
// 0 : drag & drop    
// 1 : click
card_swap_mode = 0;  


//是否使用「送出答案」的按鈕
// true : 玩家按「送出答案」才核對答案
// false : 卡片換位置後就自動對答案
enableSubmitButton = false;


//----------------
//遊戲開始前的說明對話框設定
//----------------
help_title = '說明';		//標題
help_description = '請移動各張卡片，排出正確的英文單字。加油！';	//說明
help_button_caption = '開始';	//按鈕上的文字


//----------------
//音效控制
//----------------
//是否播放音效及語音
sound_enabled = true;

//是否自動播放語音 true : 自動播放 / false : 按播放鈕才播放
sound_autoPlay = false;

//是否使用 TTS 的語音
tts_enabled = true;

//將題庫中的哪一個欄位的文字轉語音(由 0 起算)
tts_is_at_index = 0;
	
//----------------
//Googl TTS 文字轉語音的設定
//----------------
tts_language = 'en';  // en : 英語,   zh_tw : 中文
tts_base_url = 'https://translate.google.com/translate_tts?ie=UTF-8&tl='+tts_language+'&client=tw-ob&ttsspeed=1&q=';

//----------------
// 題庫
//----------------
// 每對引號中的即是一個問題的設定
//
// 問題設定中可以有兩個欄位
// 第二個欄位可指定語音檔路徑，如果未指定，會使用 Google TTS 
//

//----------------
//資料分割符號設定
//----------------
//先以 data_seperator 分割, 
//再以 split_seperator 分割
data_seperator = "###";	//題目字串中，各欄位的分隔符號
split_seperator = "==";	//句子字串中，切割子字串的的分隔符號

//----------------
//題庫
//----------------
question_lines=new Array(
//------------------------------------下一行開始增加題目
  'h==a==p==p==y###快樂==images/happy.png'
, 'a==n==g==r==y###生氣'
, 'c==r==y###哭泣'
//------------------------------------題庫結束,以下請勿修改
);

