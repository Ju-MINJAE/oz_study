document.addEventListener('DOMContentLoaded', () => {
  const fetchButton = document.getElementById('fetchMessage');
  const updateButton = document.getElementById('updateMessage');
  const deleteButton = document.getElementById('deleteMessage');
  const messageDisplay = document.getElementById('messageDisplay');

  fetchButton.addEventListener('click', async () => {
    try {
      const response = await axios.get('http://localhost:3000/message');
      messageDisplay.textContent = response.data.message || '메시지가 없습니다';
    } catch (error) {
      console.error('메시지 가져오기 오류:', error);
    }
  });

  updateButton.addEventListener('click', async () => {
    const newMessage = prompt('새로운 메시지를 입력하세요:');
    if (newMessage) {
      try {
        const response = await axios.put(
          'http://localhost:3000/message',
          newMessage,
          {
            headers: {
              'Content-Type': 'text/plain',
            },
          }
        );
        messageDisplay.textContent = response.data;
      } catch (error) {
        console.error('메시지 업데이트 오류:', error);
      }
    }
  });

  deleteButton.addEventListener('click', async () => {
    try {
      const response = await axios.delete('http://localhost:3000/message');
      messageDisplay.textContent = response.data;
    } catch (error) {
      console.error('메시지 삭제 오류:', error);
    }
  });
});
