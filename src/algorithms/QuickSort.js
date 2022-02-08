export default function QuickSort(FavPokemons,left, right) {
  var index;
  if(FavPokemons.length > 1){
    index = partition(FavPokemons,left,right);
    if(left < index-1){
      QuickSort(FavPokemons, left, index-1);
    }
    if(index < right) {
      QuickSort(FavPokemons, index, right);
    }
  }
  return FavPokemons
}

function swap(items, leftIndex, rigthIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rigthIndex];
  items[rigthIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)];
  var i = left;
  var j = right;
  while(i <= j) {
    while(items[i].id < pivot.id){
      i++
    }
    while(items[j].id > pivot.id){
      j--
    }
    if(i <= j) {
      swap(items,i,j);
      i++;
      j--;
    }
  }
  return i;
}