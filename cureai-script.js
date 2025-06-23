
    // DOM Elements
    const micButton = document.getElementById('micButton');
    const voiceModal = document.getElementById('voiceModal');
    const closeModal = document.getElementById('closeModal');
    const toast = document.getElementById('toast');
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    // Event Listeners
    micButton.addEventListener('click', openVoiceModal);
    closeModal.addEventListener('click', closeVoiceModal);
    searchIcon.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        handleSearch();
      }
    });
    
    // Functions
    function openVoiceModal() {
      voiceModal.style.display = 'flex';
      // In a real app, would start voice recognition here
      setTimeout(() => {
        // Simulate voice recognition ending after 5 seconds
        closeVoiceModal();
        showToast("I heard you! Let me help with that.");
      }, 5000);
    }
    
    function closeVoiceModal() {
      voiceModal.style.display = 'none';
    }
    
    function handleSearch() {
      const query = searchInput.value.trim();
      if (query) {
        showToast("Searching for: " + query);
        searchInput.value = '';
        // In a real app, would process the search here
      }
    }
    
    function showToast(message) {
      const toastMessage = document.querySelector('.toast-message');
      toastMessage.textContent = message;
      toast.classList.add('show');
      
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
    
    // Load doctor animation
    document.addEventListener('DOMContentLoaded', function() {
      const doctorContainer = document.getElementById('doctor-animation-container');
      
      // Create a friendly doctor animation
      const doctorAnimation = lottie.loadAnimation({
        container: doctorContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets5.lottiefiles.com/packages/lf20_tutvdkg0.json'
        // Note: In a production app, you would host this JSON file yourself
      });
      
      doctorContainer.addEventListener('click', function() {
        showToast("Hello! I'm Dr. AI. How can I help you today?");
      });
      
      // Initialize quick action buttons
      const actionCards = document.querySelectorAll('.action-card');
      actionCards.forEach(card => {
        card.addEventListener('click', function() {
          const actionText = this.querySelector('h4').textContent;
          showToast(`Opening ${actionText}...`);
        });
      });
      
      // Initialize insight items
      const insightItems = document.querySelectorAll('.insight-item');
      insightItems.forEach(item => {
        item.addEventListener('click', function() {
          const insightTitle = this.querySelector('.insight-title').textContent;
          showToast(`Viewing ${insightTitle} details...`);
        });
      });
      
      // Add a small delay before showing the animation to ensure smooth page load
      setTimeout(() => {
        doctorContainer.style.opacity = 1;
      }, 500);
    });
<script>
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("chatModal");
  const trigger = document.getElementById("searchTrigger");
  const closeBtn = document.getElementById("closeModal");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatArea = document.getElementById("chatArea");

  trigger.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  chatForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = chatInput.value.trim();
    if (!msg) return;

    const userBubble = document.createElement("div");
    userBubble.className = "chat-bubble user";
    userBubble.innerText = msg;
    chatArea.appendChild(userBubble);
    chatInput.value = "";

    setTimeout(() => {
      const botBubble = document.createElement("div");
      botBubble.className = "chat-bubble ai";
      botBubble.innerText = "🤖 CURE AI will respond here after backend is connected.";
      chatArea.appendChild(botBubble);
      chatArea.scrollTop = chatArea.scrollHeight;
    }, 600);
  });
});
</script>

  