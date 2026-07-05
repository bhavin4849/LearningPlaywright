let idloggedin = true;
let userrole = 'editor';

if (userrole === 'admin') {
    console.log('admin can do anything!');
} else if (userrole === 'editor') {
    console.log('editor can edit content!');
}
else if (userrole === 'viewOnly') {
    console.log('viewOnly can only view content!');
}
else {
    console.log('unknown user role!');
}