/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
  CKEDITOR.addStylesSet( 'drupal',
  [

    /* Object Styles */
    {
      name : 'Image on Left',
      element : 'img',
      attributes : { 'class': 'left-image' }
    },

    {
      name : 'Image on Right',
      element : 'img',
      attributes : { 'class': 'right-image' }
    },

    {
      name: 'Centered image',
      element: 'img',
      attributes: { 'class': 'center-image' }
    },

    {
      name: 'Lead',
      element : ['div', 'p'],
      attributes : { 'class': 'lead' }
    },

    {
      name: 'Button',
      element: 'a',
      attributes : { 'class' : 'btn btn-primary' }
    },

    {
      name: 'Large button',
      element: 'a',
      attributes : { 'class' : 'btn btn-primary btn-lg' }
    },

    {
      name: 'Call to action',
      element: 'a',
      attributes : { 'class' : 'btn btn-info' }
    },

    {
      name: 'Large call to action',
      element: 'a',
      attributes : { 'class' : 'btn btn-info btn-lg' }
    },

    {
      name: 'Heading 1 style',
      element: ['p', 'div', 'h2', 'h3', 'h4', 'h5', 'h6'],
      attributes: { 'class': 'h1' }
    },
    {
      name: 'Heading 2 style',
      element: ['p', 'div', 'h1', 'h3', 'h4', 'h5', 'h6'],
      attributes: { 'class': 'h2' }
    },

    {
      name: 'Heading 3 style',
      element: ['p', 'div', 'h1', 'h2', 'h4', 'h5', 'h6'],
      attributes: { 'class': 'h3' }
    },

    {
      name: 'Heading 4 style',
      element: ['p', 'div', 'h1', 'h2', 'h3', 'h5', 'h6'],
      attributes: { 'class': 'h4' }
    },

    {
      name : 'Left container',
      element : 'div',
      attributes : { 'class': 'left-container' }
    },

    {
      name : 'Right container',
      element : 'div',
      attributes : { 'class': 'right-container' }
    },
    {
      name : 'Unstyled list',
      element: 'ul',
      attributes: { 'class': 'list-unstyled' }
    },

    {
      name : 'Inline list',
      element: 'ul',
      attributes: { 'class': 'list-inline' }
    },

    {
      name : 'Inline list - spread',
      element: 'ul',
      attributes: { 'class': 'list-inline list-inline-spread' }
    },

    { name : 'Big'        , element : 'big' },
    { name : 'Small'      , element : 'small' },
    { name : 'Typewriter'   , element : 'tt' },

    { name : 'Computer Code'  , element : 'code' },
    { name : 'Keyboard Phrase'  , element : 'kbd' },
    { name : 'Sample Text'    , element : 'samp' },
    { name : 'Variable'     , element : 'var' },

    { name : 'Deleted Text'   , element : 'del' },
    { name : 'Inserted Text'  , element : 'ins' },

    { name : 'Cited Work'   , element : 'cite' },
    { name : 'Inline Quotation' , element : 'q' },

    { name : 'Language: RTL'  , element : 'span', attributes : { 'dir' : 'rtl' } },
    { name : 'Language: LTR'  , element : 'span', attributes : { 'dir' : 'ltr' } },
  ]);
}
