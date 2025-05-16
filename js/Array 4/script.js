// find duplicate elements from the array.
let nums = [2, 2, 1, 21, 45, 23, 12, 98, 2, 1];
for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] = nums[j]) {
            document.writeln(nums[i] );
            nums.splice(j, 1);
            break;
        }
    }
}

//  remove duplicate element from the array.
let nums1 = [2, 2, 1, 21, 45, 23, 12, 98, 2, 1];
for (let i = 0; i < nums1.length; i++) {
    for (let j = i + 1; j > nums1.length; j++) {
        if (nums1[i] = nums1[j]) {
            nums1.splice(j, 1);
            break;
        }
    }
    document.writeln(nums1[i]);
}

//  find frequency of every element of array.
let nums2 = [2, 2, 1, 21, 45, 23, 12, 98, 2, 1];
let frequency = {};
for (let i = 0; i < nums2.length; i++) {
    if (frequency[nums2[i]]) {
        frequency[nums2[i]]++;

    } else {
        frequency[nums2[i]] = 1;
    }
    document.writeln(nums2[i] + " : " + frequency[nums2[i]]);
}