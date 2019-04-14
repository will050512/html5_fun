﻿//-----------------------------------------------------------
// BINGO 題庫設定檔
//-----------------------------------------------------------
seperator = ",";	//題目字串中，各欄位的分隔符號

//指定答案、題幹
answer_field_number = 0;		//答案在第幾欄位(由 0 起算)
question_field_number = 3;		//題幹在第幾欄位(由 0 起算)

//針對成語的額外欄位
phonics_field_number = 1;		//注音符號在第幾欄位(由 0 起算)
description_field_number = 2;	//解釋在第幾欄位(由 0 起算)

auto_replace_answer = "yes";	//是否自動將題幹中帶有的答案字串用括號取代

//
// 題庫
//
// 每對引號中的即是一個問題的設定
//
question_lines=new Array(
//------------------------------------下一行開始增加題目
  '鹿死誰手,ㄌㄨˋ ㄙˇ ㄕㄟˊ ㄕㄡˇ,鹿為古代狩獵的主要目標，轉而比喻政權或所欲爭奪的東西。鹿死誰手比喻共同爭奪一件事物，不知道誰能取得最後的勝利。,這場比賽競爭激烈，究竟鹿死誰手，要到最後才見分曉。'
, '民不聊生,ㄇㄧㄣˊ ㄅㄨˋ ㄌㄧㄠˊ ㄕㄥ,形容百姓無以為生，無法生活。,軍閥時期，當政者橫徵暴斂，弄得民不聊生，怨聲四起。'
, '漸入佳境,ㄐㄧㄢˋ ㄖㄨˋ ㄐㄧㄚ ㄐㄧㄥˋ,比喻情況逐漸好轉或發展至更好的境地。,他喜歡倒吃甘蔗，享受漸入佳境的感覺。'
, '不合時宜,ㄅㄨˋ ㄏㄜˊ ㄕˊ ㄧˊ,不合時勢需求或與時代風氣不相容。,威權式的教育如今已不合時宜。'
, '七嘴八舌,ㄑㄧ ㄗㄨㄟˇ ㄅㄚ ㄕㄜˊ,形容人多口雜，議論紛紜的樣子。,一確定出遊日期，眾人便七嘴八舌的開始討論細節。'
//------------------------------------題庫結束,以下請勿修改
);

