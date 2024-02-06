
document.addEventListener('DOMContentLoaded', function () {
    const withTooltipItems = document.querySelectorAll('.with-tooltip');

    withTooltipItems.forEach(item => {
        const tooltipId = item.getAttribute('data-tooltip-content');
        const tooltipContent = document.getElementById(tooltipId);
        
        // Adding event listeners to both the trigger item and the tooltip content
        item.addEventListener('mouseover', () => showTooltipContent(tooltipContent));
        item.addEventListener('mouseout', () => hideTooltipContent(tooltipContent));
        tooltipContent.addEventListener('mouseover', () => showTooltipContent(tooltipContent));
        tooltipContent.addEventListener('mouseout', () => hideTooltipContent(tooltipContent));
    });

    function showTooltipContent(content) {
        if (content) {
            content.style.display = 'flex';
        }
    }

    function hideTooltipContent(content) {
        if (content) {
            content.style.display = 'none';
        }
    }

    // Show content for the hovered item in the tooltip
    const tooltipItems = document.querySelectorAll('.tooltip-item');
    const tooltipContentItems = document.querySelectorAll('.tooltip-content-item');

    tooltipItems.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            // Hide all content items
            tooltipContentItems.forEach(contentItem => {
                contentItem.style.display = 'none';
            });
            // Show content item corresponding to the hovered item
            tooltipContentItems[index].style.display = 'block';
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.with-submenu');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('active');
        });
    });

    const backButtons = document.querySelectorAll('.back-button');

    backButtons.forEach(button => {
        button.addEventListener('click', function () {
            const submenu = this.parentElement;
            submenu.classList.remove('active');
        });
    });
});
