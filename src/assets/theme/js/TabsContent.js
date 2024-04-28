const toggleTabs = () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
  
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
  
        tabs.forEach((t) => t.classList.remove('active'));
        contents.forEach((c) => c.classList.remove('active'));
  
        tab.classList.add('active');
        const content = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
        if (content) {
          content.classList.add('active');
        }
      });
    });
  };
  
  toggleTabs();
  