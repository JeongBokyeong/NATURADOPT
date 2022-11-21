const API = {
    GetChatbotResponse: async message => {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          if (message === "안녕") resolve("나뚜라 하우스에 오신 것을 환영합니다!!");
          else resolve("나는 봇이야!");
        }, 2000);
        if (message.includes("동물분양") || message.includes("동물 분양")) resolve("분양받고 싶은 종을 말씀해주세요");
         else resolve("나는 봇이야!");
        }, 2000);

    }
  };
  
  export default API;
  