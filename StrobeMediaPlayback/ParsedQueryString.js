/*******************************************************************************
 * 
 * ParsedQueryString version 1.0
 * Copyright 2007, Jeff Mott <Mott.Jeff@gmail.com>. All rights reserved.
 * 
 * Redistribution and use in source and binary forms with or without
 * modification are permitted provided that the above copyright notice,
 * this condition, and the following disclaimer are retained.
 *
 * THIS SOFTWARE IS PROVIDED AS IS, AND ANY EXPRESS OR IMPLIED WARRANTIES,
 * INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE, ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT
 * LIMITED TO PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 ******************************************************************************/
function ParsedQueryString(){this._init()}ParsedQueryString.version="1.0",ParsedQueryString.prototype={_init:function(){if(this._parameters={},!(location.search.length<=1))for(var r=location.search.substr(1).split(/[&;]/),e=0;e<r.length;e++){var t=r[e].split(/=/),a=this._decodeURL(t[0]);if(Boolean(t[1])){var s=this._decodeURL(t[1]);Boolean(this._parameters[a])?this._parameters[a].push(s):this._parameters[a]=[s]}}},_decodeURL:function(r){return decodeURIComponent(r.replace(/\+/g," "))},param:function(r){return Boolean(this._parameters[r])?this._parameters[r][0]:""},params:function(r){if(Boolean(r)){if(Boolean(this._parameters[r])){for(var e=[],t=0;t<this._parameters[r].length;t++)e.push(this._parameters[r][t]);return e}return[]}var a=[];for(var r in this._parameters)a.push(r);return a}};