<script>
	import Bus from '$lib/icons/Bus.svelte';

	// let currentDroppable = null;
	// function handleMouseDown(event) {
	// 	event.preventDefault();
	// 	let elm = event.target;
	// 	let shiftX = event.clientX - elm.getBoundingClientRect().left;
	// 	let shiftY = event.clientY - elm.getBoundingClientRect().top;
	// 	elm.style.position = 'absolute';
	// 	elm.style.zIndex = 1000;
	// 	document.body.append(elm);
	// 	moveAt(event.pageX, event.pageY);

	// 	function moveAt(pageX, pageY) {
	// 		elm.style.left = pageX - shiftX + 'px';
	// 		elm.style.top = pageY - shiftY + 'px';
	// 	}

	// 	function onMouseMove(event) {
	// 		moveAt(event.pageX, event.pageY);
	// 		elm.hidden = true;
	// 		let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
	// 		elm.hidden = false;
	// 		if (!elemBelow) return;
	// 		let droppableBelow = elemBelow.closest('.empty');
	// 		if (currentDroppable != droppableBelow) {
	// 			if (currentDroppable) {
	// 				leaveDroppable(currentDroppable);
	// 			}
	// 			currentDroppable = droppableBelow;
	// 			if (currentDroppable) {
	// 				enterDroppable(currentDroppable);
	// 			}
	// 		}
	// 	}
	// 	document.addEventListener('mousemove', onMouseMove);

	// 	elm.onmouseup = function () {
	// 		document.removeEventListener('mousemove', onMouseMove);
	// 		currentDroppable.style.background = '';
	// 		elm.remove();
	// 	};
	// }

	// function enterDroppable(elem) {
	// 	elem.style.background = 'pink';
	// }

	// function leaveDroppable(elem) {
	// 	elem.style.background = '';
	// }
</script>

<!-- <div on:mousedown={handleMouseDown} on:dragstart={() => false}> -->
<div>
	<Bus />
</div>
